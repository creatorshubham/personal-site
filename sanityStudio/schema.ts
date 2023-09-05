/**
 * Settings
 */
import { navigation } from '@schemas/settings/navigation'
import { siteSettings } from '@schemas/settings/siteSettings'
import { theme } from '@schemas/settings/theme'
import { mux } from '@schemas/settings/mux.api'

const _settings = [navigation, siteSettings, theme, mux]

/** 
 * Objects
 */
import { basicBlockContent, extraBlockContent } from '@schemas/objects/blockContent'
import { link } from '@schemas/objects/link'
import { social } from '@schemas/objects/social'
import { textObject } from '@schemas/objects/text'
import { projectObjectsList } from '@schemas/documents/project'

import { gallery } from '@schemas/objects/gallery'
import { video } from '@schemas/objects/video'
import { basicDate } from '@schemas/objects/basicDate'
import { basicDocumentOptions } from '@/sanityStudio/lib/basicDocumentOptions'

const _objects = [basicBlockContent, extraBlockContent, link, social, textObject, gallery, video, basicDate, basicDocumentOptions, projectObjectsList]

/**
 * Documents
 */

import { project } from '@schemas/documents/project'
import { taxonomicTerm } from '@schemas/documents/taxonomy'

const _documents = [project, taxonomicTerm]

export const types = [..._settings, ..._documents, ..._objects];
