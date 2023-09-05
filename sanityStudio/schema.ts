/** 
 * Objects
 */
import blockContent from '@schemas/objects/blockContent'
import { link } from '@schemas/objects/link'
import { social } from '@schemas/objects/social'
import { textObject } from '@schemas/objects/text'
import { gallery } from '@schemas/objects/gallery'
import { video } from '@schemas/objects/video'

const _objects = [blockContent, link, social, textObject, gallery, video]

/**
 * Documents
 */
import { navigation } from '@schemas/settings/navigation'
import { siteSettings } from '@schemas/settings/siteSettings'
import { theme } from '@schemas/settings/theme'
import { project, projectObjects } from '@schemas/documents/project'
import { taxonomicTerm } from '@schemas/documents/taxonomy'
import { mux } from '@schemas/settings/mux.api'

const _documents = [siteSettings, navigation, theme, project, taxonomicTerm, mux]

export const types = [..._documents, ..._objects, projectObjects];
