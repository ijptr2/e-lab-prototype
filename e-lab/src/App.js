import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AgriConnectPrototype() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">AgriConnect South Sudan</h1>
        <p className="text-gray-600">A digital platform empowering farmers with resources, funding, and knowledge.</p>
      </header>
      
      <Tabs defaultValue="home">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
          <TabsTrigger value="market">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Connecting Farmers to Opportunities</h2>
              <p className="text-gray-700 mb-4">AgriConnect provides farmers with access to essential tools, training, and financial support.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Latest success stories from funded projects</li>
                <li>Featured farmers making an impact</li>
                <li>Upcoming agricultural training events</li>
              </ul>
              <Button className="mt-4">Explore Opportunities</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funding">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Funding Agricultural Ventures</h2>
              <p className="text-gray-700">Invest in promising farming projects and help rural communities thrive.</p>
              <div className="mt-4 space-y-4">
                {[
                  { title: "Organic Tomato Farm Expansion", amount: "$5,000", description: "Seeking funds to scale production and distribution." },
                  { title: "Irrigation System for Smallholder Farmers", amount: "$3,500", description: "Goal: Solar-powered irrigation." },
                  { title: "Livestock Vaccination Initiative", amount: "$7,000", description: "Preventative treatment for cattle diseases." },
                  { title: "Women-Led Poultry Farm", amount: "$4,200", description: "Support sustainable poultry farming for local women." },
                  { title: "Agroforestry for Soil Improvement", amount: "$6,500", description: "Planting trees to enhance soil fertility and reduce erosion." }
                ].map((funding, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="text-lg font-semibold">{funding.title}</h3>
                    <p className="text-gray-600">{funding.description}</p>
                    <p className="text-gray-700 font-semibold">Funding Goal: {funding.amount}</p>
                    <Button className="mt-2">Support This Project</Button>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Learn Best Farming Practices</h2>
              <p className="text-gray-700">Access tutorials, guides, and expert advice tailored for South Sudanese farmers.</p>
              <ul className="list-disc pl-5 text-gray-700 mt-4">
                <li>Basic soil management techniques</li>
                <li>Efficient irrigation methods</li>
                <li>Market trends and pricing strategies</li>
                <li>Natural pest control strategies</li>
                <li>Post-harvest handling and storage techniques</li>
              </ul>
              <Button className="mt-4">Explore Curriculum</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Affordable Farming Inputs</h2>
              <p className="text-gray-700">Buy seeds, tools, and rent farming equipment at fair prices.</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { name: "Hybrid Maize Seeds", price: "$10 per kg", description: "Improves yield by 40%." },
                  { name: "Manual Water Pump", price: "$120", description: "Ideal for small farms." },
                  { name: "Drip Irrigation Kit", price: "$250", description: "Water-efficient system for small plots." },
                  { name: "Organic Fertilizer Pack", price: "$30", description: "Boosts soil fertility naturally." },
                  { name: "Multi-Tool Farming Kit", price: "$75", description: "Essential tools for smallholder farmers." }
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-700 font-semibold">Price: {item.price}</p>
                    <Button className="mt-2">Add to Cart</Button>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
