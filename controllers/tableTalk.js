const TableTalkView = require("../view/tableTalk")

const getBlog = async (req, res) => {
  try {
    const result = await TableTalkView.getBlog()
    if (result.success) {
      res.status(200).json({ data: result.data, error: null, message: result.message });
    } else {
      res.status(404).json({ error: result.message });
    }
  } catch (error) {
    console.error('Error getting blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postBlog = async (req, res) => {
  try {
    const result = await TableTalkView.postBlog(req.body);

    if (result.success) {
      res.status(200).json({ data: result, error: null, message: 'Blog created successfully' });
    } else {
      res.status(500).json({ error: 'Error creating blog' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateBlog = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await TableTalkView.updateBlog(id, req.body);
      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      res.status(500).json({ error: viewError.message });
    }
  };
  
  const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await TableTalkView.deleteBlog(id);
  
      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      res.status(500).json({ error: viewError.message });
    }
  };

  const getBlogBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
      const result = await TableTalkView.getBlogBySlug(slug)
      if (result.success) {
        res.status(200).json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(404).json({ error: result.message });
      }
    } catch (error) {
      console.error('Error getting blog:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = {getBlog, postBlog, updateBlog, deleteBlog, getBlogBySlug}
