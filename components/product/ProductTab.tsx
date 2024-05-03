import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
  aboutItem: string[];
  reviews?: Record<any, string>[];
}

const ProductTab = ({ aboutItem = [], reviews = [] }: ProductTabsProps) => {
  return (
    <div>
      <Tabs defaultValue="aboutitem" className="w-full p-4">
        <TabsList>
          <TabsTrigger value="aboutitem">About This Item</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="aboutitem">
          <div>
            <ol className="list-disc">
              {aboutItem.map((about) => (
                <li key={about}>{about}</li>
              ))}
            </ol>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
            {reviews?.length === 0 ? 'No Review Found For This Product' : (
                <div>hello</div>
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTab;
