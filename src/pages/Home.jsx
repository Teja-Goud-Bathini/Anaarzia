
import { Truck, Shield, Clock, ChevronRight, Star } from 'lucide-react';

export default function Home() {
   
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <section className="py-20 sm:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                                Premium Pet Nutrition
                                <span className="block text-3xl md:text-4xl mt-4 text-gray-800">
                                    Delivered with Love to Your Door
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                Discover our expertly curated recipes, made with sustainably sourced ingredients, 
                                delivered in eco-friendly packaging that's as premium as the food inside.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                    Shop Premium Food
                                </button>
                                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-medium text-lg hover:shadow-md hover:border-purple-600 transition-all duration-200">
                                    View Collections
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
                                {[
                                    { icon: "✓", text: "Free Premium Delivery", subtext: "Orders over $50" },
                                    { icon: "★", text: "Vet-Approved", subtext: "Quality guaranteed" },
                                    { icon: "♻", text: "Eco-Friendly", subtext: "100% recyclable" }
                                ].map((item) => (
                                    <div key={item.text} className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200">
                                        <span className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">{item.icon}</span>
                                        <p className="font-medium mt-2">{item.text}</p>
                                        <p className="text-sm text-gray-500">{item.subtext}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl transform rotate-3"></div>
                            <img
                                src="/petfood.jpg" // Place petfood.jpg in your public folder
                                alt="Happy pet enjoying premium food"
                                className="relative rounded-3xl w-full h-[600px] object-cover shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>
                 {/* Features */}
     
                {/* You can keep the Categories and Popular Collections sections as they are */}
            </main>
        </div>
    );
}
