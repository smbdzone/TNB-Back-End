const yup = require("yup");

const createFocus = yup
  .object()
  .shape({
    searchParams: yup.string().required("Search parameters are required"),
    pageTitle: yup.string().required("Page title is required"),
    banner: yup.object().shape({
      bannerImg: yup.string().required("Banner image is required"),
      bannerAlt: yup.string().required("Banner alt text is required"),
      heading: yup.string().required("Banner heading is required"),
      description: yup.string().required("Banner description is required"),
    }),
    headingSection: yup.object().shape({
      leftHeading: yup.string().required("Left heading is required"),
      sectionHeading: yup.string().required("Section heading is required"),
      description: yup.string().required("Section description is required"),
    }),
    whyChooseUs: yup.object().shape({
      title: yup.string().required("Why choose us title is required"),
      description: yup
        .string()
        .required("Why choose us description is required"),
    }),
    faq: yup.array().of(
      yup.object().shape({
        question: yup.string().required("FAQ question is required"),
        ans: yup.string().required("FAQ answer is required"),
      })
    ),
    services: yup.array().of(
      yup.object().shape({
        image: yup.string().required("Service image is required"),
        imageAlt: yup.string().required("Service image alt text is required"),
        heading: yup.string().required("Service heading is required"),
        description: yup.string().required("Service description is required"),
      })
    ),
    seo: yup.object().shape({
      title: yup.string().required("SEO title is required"),
      description: yup.string().required("SEO description is required"),
      ogTitle: yup.string().required("OG title is required"),
      ogDescription: yup.string().required("OG description is required"),
    }),
  })
  .noUnknown();

const getFocus = yup.object().shape({
  searchParams: yup.string().required("Page title is required"),
})

module.exports = {
  createFocus,
  getFocus,
};
