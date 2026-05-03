import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuthButtons } from "@/components/auth-buttons";
import {
  Link2,
  BarChart3,
  Zap,
  Share2,
  Lock,
} from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Create shortened URLs in milliseconds. No waiting, no complexity.",
    },
    {
      icon: Link2,
      title: "Custom URLs",
      description:
        "Create memorable custom short links that match your brand.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Track clicks, geographic data, referrers, and more in real-time.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "Share your shortened links across social media with a single click.",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee.",
    },
    {
      icon: BarChart3,
      title: "Free & Unlimited",
      description:
        "Start shortening links right away with no limitations or credit card needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
              Shorten Your Links,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Amplify Your Reach
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
              Create short, memorable links in seconds. Track every click with
              detailed analytics. Perfect for marketers, social media managers,
              and anyone who needs to share links.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <AuthButtons />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-blue-400">10M+</p>
              <p className="text-slate-400">Links Created</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-400">50K+</p>
              <p className="text-slate-400">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-300">99.9%</p>
              <p className="text-slate-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to manage, track, and optimize your links
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/80 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already shortening their links and
            tracking performance in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthButtons />
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link2 className="h-6 w-6 text-blue-500" />
              <span className="font-semibold text-white">LinkShorten</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 LinkShorten. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
