import TextBlock from "@/app/_components/site/TextBlock";
import { getClient } from "@/lib/sanity.client";
import { settingsQuery, settingsData, aboutData, aboutQuery } from "@/lib/sanity.queries";
import { draftMode } from "next/headers";

import { PortableText } from '@portabletext/react'
import { portableTextComponents } from "@/lib/portableTextComponenets";
import SocialIcon from "@/app/_components/site/SocialIcon";

/** Metadata defined in layout for top route page */
export default async function Home() {
	const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined

	const client = getClient(preview)
	const settings: settingsData = await client.fetch(settingsQuery)
	const about: aboutData = await client.fetch(aboutQuery);

  return (
		<div className="relative flex flex-col min-w-full">
			<TextBlock>
				<PortableText value={settings.summary} components={portableTextComponents}/>
			</TextBlock>
			<TextBlock>
				<h2>about</h2>
				<PortableText value={about.bio} components={portableTextComponents} />
				<div className="flex flex-row space-x-4 mt-8">
					{about.socials.map((social) => {
						return <SocialIcon social={social} />
					}
					)}
				</div>
			</TextBlock>
    </div>
  )
}
