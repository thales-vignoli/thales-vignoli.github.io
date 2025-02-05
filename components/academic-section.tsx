import { Card, CardContent } from "@/components/ui/card"

export function AcademicSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold">Academic experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-border" />
        <div className="space-y-8 relative">
          <div className="relative pl-8">
            <div className="absolute left-0 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">MBA in Data Science & Analytics</h3>
                    <p className="text-blue-500">Universidade de São Paulo</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>May 2021 – August 2023</p>
                    <p>São Paulo - SP, Brazil</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Grade: 10</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>In-depth study of machine learning models.</li>
                    <li>Developed an end-to-end hybrid ML model for churn prediction.</li>
                    <li>Project code repository</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">PhD Researcher</h3>
                    <p className="text-blue-500">Universidade de São Paulo</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>July 2016 – April 2021</p>
                    <p>São Paulo - SP, Brazil</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Thesis: Identifying natural selection in Native American populations. Supported by: CAPES (2016 -
                    2018) and FAPESP (2018 - 2020)
                  </p>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <p className="text-muted-foreground">
                    Data analysis, visualization, and scientific reporting of genetic data using R, Python, and bash
                    scripting
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

