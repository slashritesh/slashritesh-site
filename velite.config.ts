import {s,defineCollection,defineConfig, MdxOptions} from "velite"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeToc from "@jsdevtools/rehype-toc"


// custom feild
const computedFeilds = <T extends {slug : string}>(data : T)=>(
    {
        ...data,
        slugAsParams : data.slug.split("/").slice(1).join("/")
    }
)

const posts = defineCollection({
    name : "Posts",
    pattern : "blog/**/*.mdx",
    schema : s.object({
        slug : s.path(),
        headimage : s.path(),
        title : s.string(),
        description : s.string().optional(),
        date : s.isodate(),
        published : s.boolean().default(true),
        body : s.mdx()
    }).transform(computedFeilds)
})


export default defineConfig({
    root : "content",
    output : {
        data : ".velite",
        assets : "public/static",
        base : "/static/",
        name : "[name]-[hash:6].[ext]",
        clean : true
    },
    collections : {posts},
    mdx : {
        rehypePlugins : [rehypeSlug,[rehypePrettyCode,{theme : "material-theme-ocean"}]],
        remarkPlugins : []
    }
})