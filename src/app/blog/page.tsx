import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Coffee tips, brewing guides, origin stories, and more from the Arabica Coffee team.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              The Arabica Blog
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Stories, tips, and insights from our world of specialty coffee.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Featured Post */}
      <section className="py-24">
        <SectionContainer>
          <AnimatedSection>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-coffee-800 mb-4 group-hover:text-coffee-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-coffee-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-coffee-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center text-gold-600 font-medium group-hover:text-gold-700">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-cream-100">
        <SectionContainer>
          <AnimatedSection className="mb-12">
            <Heading as="h2" size="lg">
              Recent Articles
            </Heading>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-card transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-2 group-hover:text-coffee-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-coffee-500 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-coffee-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <SectionContainer size="narrow" className="text-center">
          <AnimatedSection>
            <Heading as="h2" size="md" className="mb-4">
              Never Miss a Post
            </Heading>
            <p className="text-lg text-coffee-600">
              Subscribe to our newsletter for the latest articles, tips, and
              updates delivered to your inbox.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
