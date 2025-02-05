import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold">Current experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-border" />
        <div className="space-y-8 relative">
          <div className="relative pl-8">
            <div className="absolute left-0 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Scientist & Postdoctoral Researcher</h3>
                    <p className="text-primary">UW-Madison - Top 15 public universities in the US</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>August 2024 – Present</p>
                    <p>Madison - WI, USA</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Main activities:</h4>
                    <p className="text-muted-foreground">
                      Support database development, statistical analysis, and AI applications; write up research
                      results; and travel to Brazil to represent UW in meetings with stakeholders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deliveries:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>
                        Automation of multiple processes in database development, reducing the time of manual
                        intervention.
                      </li>
                      <li>
                        An ML classifier to assess data quality at scale, allowing for the first-time scalable quality
                        check.
                      </li>
                      <li>
                        Enhance a deep Learning model to count cattle in protected areas using high-resolution imagery.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

