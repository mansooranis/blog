import { type CollectionEntry, getCollection } from "astro:content";

export async function getAllReferences(): Promise<CollectionEntry<"reference">[]> {
    return await getCollection("reference", ({ data }) => {
        return import.meta.env.PROD ? !data.draft : true;
    });
}

/** groups posts by year (based on option siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: CollectionEntry<"reference">[]) {
	return posts.reduce<Record<string, CollectionEntry<"reference">[]>>((acc, post) => {
		const year = post.data.publishDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}