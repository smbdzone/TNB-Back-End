const yup = require('yup');

const menuItemSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  slug: yup.string().required('Slug is required'),
});

const createMenu = yup.object().shape({
  title: yup.string().required('Title is required'),
  slug: yup.string().required('Slug is required'),
  image: yup.string(),
  children: yup.array().of(menuItemSchema),
  brands: yup.array().of(menuItemSchema),
});

module.exports = {
    createMenu
};