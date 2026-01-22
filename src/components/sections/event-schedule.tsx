import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin } from "lucide-react";
type Event = {
  title: string;
  time: string;
  location: string;
  description: string;
};
const EventSchedule = () => {
  return (
    <section id="events" className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Schedule of Events</h2>
          <p className="mt-4 text-lg text-muted-foreground"> Plan your day at Ignitia 2k26</p>
        </div>
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>
          {Object.entries(eventsByDay).map(([day, events]) => (
            <TabsContent key={day} value={day}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {events.map((event) => (
                  <Card key={event.title} className="bg-card/50 hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                      <CardDescription className="pt-2 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> <p className="text-muted-foreground">{event.description}</p></CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
export default EventSchedule;