import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { getAllBlogPosts } from "@/data/blogPostsBilingual"
import { useTranslations } from "@/data/translations"
import { useLanguage } from "@/contexts/LanguageContext"
import { 
  BookOpen, 
  Clock, 
  ArrowRight
} from "lucide-react"

const blogMetaData = {
  title: "Blog | Andrew Rogers | Campo Grande, MS",
  description: "Artigos e dicas sobre aprendizado de inglês: aulas online, particulares, em grupo e conversação. Conselhos de professor americano nativo.",
  canonical: "https://auladeinglesemcasa.com/blog"
}

export function BlogPage() {
  const t = useTranslations()
  const { language } = useLanguage()
  const allPosts = getAllBlogPosts(language)
  const [visiblePostsCount, setVisiblePostsCount] = useState(6)
  
  useEffect(() => {
    updateMetaTags(blogMetaData)
  }, [])

  const displayedPosts = allPosts.slice(0, visiblePostsCount)
  const hasMorePosts = visiblePostsCount < allPosts.length

  const loadMorePosts = () => {
    setVisiblePostsCount(prev => prev + 3)
  }




  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Mountains.webp" 
          alt="Mountains background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <BookOpen className="w-12 h-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.blog.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </section>



      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                {post.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-end mb-2">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime} {t.blog.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mt-1">{t.blog.author.replace('Andrew Rogers', '')} <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {post.excerpt}
                  </CardDescription>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    {t.actions.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMorePosts}
                variant="outline"
                size="lg"
                className="px-8 py-3"
              >
                {t.actions.loadMore}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
          
          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.blog.emptyState.title}</h3>
              <p className="text-muted-foreground">
                {t.blog.emptyState.description}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}