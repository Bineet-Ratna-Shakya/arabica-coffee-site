import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <article>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-coffee-900/80 to-coffee-900/60" />
        <SectionContainer className="relative">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center text-cream-300 hover:text-cream-100 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <Badge variant="gold" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-cream-300">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <SectionContainer size="narrow">
          <AnimatedSection>
            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 -mt-24 shadow-elevated">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-coffee-700 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <h2>The Perfect Cup Starts Here</h2>
              <p>
                Coffee is more than just a beverage—it's an experience, a ritual,
                and for many, an essential part of daily life. At Arabica, we've
                spent years perfecting our craft, and we're excited to share our
                knowledge with you.
              </p>

              <p>
                Whether you're a seasoned coffee enthusiast or just beginning your
                journey, understanding the fundamentals can elevate your
                appreciation for this remarkable drink. Let's dive into what makes
                a truly exceptional cup of coffee.
              </p>

              <h2>Quality Beans Matter</h2>
              <p>
                The foundation of great coffee lies in the beans themselves. We
                source our beans directly from farmers in Ethiopia, Colombia,
                Guatemala, and other renowned coffee-growing regions. Each origin
                brings unique flavor profiles—from the fruity notes of Ethiopian
                Yirgacheffe to the chocolatey richness of Colombian beans.
              </p>

              <blockquote>
                "The best coffee tells a story—of the land where it was grown, the
                hands that harvested it, and the care taken at every step of the
                journey."
              </blockquote>

              <h2>The Art of Roasting</h2>
              <p>
                Roasting transforms raw green coffee beans into the aromatic brown
                beans we know and love. It's a delicate process that requires
                precision, patience, and years of experience. Our head roaster
                monitors each batch carefully, adjusting time and temperature to
                bring out the best qualities in every bean.
              </p>

              <h2>Brewing Techniques</h2>
              <p>
                From pour-over to espresso, each brewing method offers a different
                experience. The key is understanding how water temperature,
                grind size, and brewing time affect the final cup. We encourage
                experimentation—that's how you'll discover your perfect brew.
              </p>

              <h3>Our Top Tips:</h3>
              <ul>
                <li>Use freshly roasted beans (within 2-4 weeks of roasting)</li>
                <li>Grind just before brewing for maximum freshness</li>
                <li>Use filtered water at 195-205°F (90-96°C)</li>
                <li>Measure your coffee and water for consistency</li>
                <li>Clean your equipment regularly</li>
              </ul>

              <p>
                We hope this guide inspires you to explore the wonderful world of
                specialty coffee. Visit us at Arabica to taste the difference
                quality makes, or sign up for one of our brewing workshops to
                learn hands-on techniques.
              </p>
            </div>

            <Separator className="my-12" />

            {/* Author Bio */}
            <div className="flex items-start gap-4 p-6 bg-cream-100 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-coffee-200 flex items-center justify-center shrink-0">
                <span className="text-2xl font-heading font-bold text-coffee-700">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-coffee-800">
                  {post.author}
                </p>
                <p className="text-coffee-600 text-sm">
                  Coffee enthusiast and writer at Arabica Coffee. Passionate about
                  sharing the art and science of specialty coffee with our
                  community.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-cream-100">
          <SectionContainer>
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-semibold text-coffee-800 mb-8">
                Related Articles
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-coffee-800 group-hover:text-coffee-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-coffee-500 mt-1">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </SectionContainer>
        </section>
      )}
    </article>
  );
}
