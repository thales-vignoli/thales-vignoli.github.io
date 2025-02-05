import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <p className="text-xl text-muted-foreground mb-8">I develop end-to-end AI solutions</p>

      <div className="grid gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Programming</h3>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">PYTHON</h4>
                <p className="text-sm text-muted-foreground">
                  Pandas, Numpy, Scikit-learn, PyCaret, Matplotlib, Seaborn, Plotly, Folium, BeautifulSoup, Selenium,
                  etc.
                </p>
                <div className="w-full bg-secondary h-2 mt-2">
                  <div className="bg-primary h-full" style={{ width: "90%" }} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">SQL</h4>
                <p className="text-sm text-muted-foreground">
                  Create, modify and retrieve data from relational database manage systems (e.g. MySQL, Postgres)
                </p>
                <div className="w-full bg-secondary h-2 mt-2">
                  <div className="bg-primary h-full" style={{ width: "85%" }} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">R</h4>
                <p className="text-sm text-muted-foreground">
                  R base, data.table, tidyverse (e.g. dplyr, ggplot2), plotly, Rmarkdown, Bioconductor packages, and
                  more...
                </p>
                <div className="w-full bg-secondary h-2 mt-2">
                  <div className="bg-primary h-full" style={{ width: "80%" }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Technologies</h3>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">VERSION CONTROL</h4>
                <p className="text-sm text-muted-foreground">
                  Familiarity with git and GitHub (using git for all projects)
                </p>
                <div className="w-full bg-secondary h-2 mt-2">
                  <div className="bg-primary h-full" style={{ width: "95%" }} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">CLOUD PLATFORMS</h4>
                <p className="text-sm text-muted-foreground">
                  Worked with AWS and GCP (e.g., data storage, BigQuery, and Vertex AI.)
                </p>
                <div className="w-full bg-secondary h-2 mt-2">
                  <div className="bg-primary h-full" style={{ width: "85%" }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

