import { defineConfig } from "tinacms";

// TinaCMS configuration for Elite Glove Landing Page
export default defineConfig({
  branch: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // Site Settings - Single document
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/site-settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            fields: [
              {
                type: "object",
                name: "links",
                label: "Navigation Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaLink", label: "CTA Link" },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "columns",
                label: "Footer Columns",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "object",
                    name: "links",
                    label: "Links",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Link" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Meta Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // Hero Section - Single document
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "badge", label: "Badge Text" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "titleHighlight", label: "Title Highlight" },
          { type: "string", name: "titleSuffix", label: "Title Suffix" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              { type: "string", name: "primaryText", label: "Primary Button Text" },
              { type: "string", name: "primaryLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryLink", label: "Secondary Button Link" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          { type: "string", name: "image", label: "Hero Image" },
        ],
      },

      // About Section - Single document
      {
        name: "about",
        label: "About Section",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
          { type: "string", name: "image", label: "Image" },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },

      // Products - Multiple documents
      {
        name: "products",
        label: "Products",
        path: "content/products",
        format: "json",
        fields: [
          { type: "string", name: "badge", label: "Badge" },
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "string", name: "image", label: "Image" },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              { type: "string", name: "text", label: "Feature Text" },
            ],
          },
          { type: "number", name: "order", label: "Display Order" },
        ],
      },

      // Features Section - Single document
      {
        name: "features",
        label: "Features Section",
        path: "content/features",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "items",
            label: "Feature Items",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "iconName", label: "Icon Name" },
            ],
          },
        ],
      },

      // Specs Section - Single document
      {
        name: "specs",
        label: "Specifications",
        path: "content/specs",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "items",
            label: "Spec Items",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },

      // Certifications Section - Single document
      {
        name: "certifications",
        label: "Certifications",
        path: "content/certifications",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          {
            type: "object",
            name: "items",
            label: "Certification Items",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "iconName", label: "Icon Name" },
            ],
          },
        ],
      },

      // Global Presence Section - Single document
      {
        name: "globalPresence",
        label: "Global Presence",
        path: "content/global-presence",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "mapImage", label: "Map Image" },
          {
            type: "object",
            name: "regions",
            label: "Regions",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Region Name" },
              { type: "string", name: "description", label: "Countries" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
        ],
      },

      // Contact Section - Single document
      {
        name: "contact",
        label: "Contact Section",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "label", label: "Section Label" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "contactCards",
            label: "Contact Cards",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "iconName", label: "Icon Name" },
            ],
          },
        ],
      },
    ],
  },
});
