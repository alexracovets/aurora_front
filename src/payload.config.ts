// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { ParagraphFeature, BoldFeature, ItalicFeature, StrikethroughFeature, UnderlineFeature, FixedToolbarFeature, UnorderedListFeature } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { seoPlugin } from '@payloadcms/plugin-seo';

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages';
import { Results } from './collections/Results';
import { Partners } from './collections/Partners';
import { Awards } from './collections/Awards';
import { Gallery } from './collections/Gallery';
import { Header } from './collections/Header';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import { en } from "@payloadcms/translations/languages/en";
import { uk } from "@payloadcms/translations/languages/uk";

export default buildConfig({
  i18n: {
    supportedLanguages: { en, uk },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        // dashboard: {
        //   Component: "./app/views/Dashbord#Dashboard",
        // },
      }
    }
  },
  collections: [Users, Pages, Results, Awards, Partners, Gallery, Media],
  globals: [Header],
  editor: lexicalEditor(
    {
      features: [
        ParagraphFeature(),
        BoldFeature(),
        ItalicFeature(),
        StrikethroughFeature(),
        UnderlineFeature(),
        UnorderedListFeature(),
        FixedToolbarFeature()
      ],
    }
  ),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin(
      {
        collections: [Pages.slug, Results.slug, Awards.slug, Gallery.slug],
        tabbedUI: true,
        uploadsCollection: 'media',
      }
    ),
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        }
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
      }
    }),
  ],
})
