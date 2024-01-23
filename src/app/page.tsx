"use client"

import React, { useState } from 'react';
import { RESUME_DATA_EN } from '@/data/resume-data-en';
import { RESUME_DATA_DE } from '@/data/resume-data-de';

import LanguageSwitcher from "@/components/LanguageSwitcher.client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";



export default function Page() {
  const [language, setLanguage] = useState('en'); // Track the current language separately
  const [resumeData, setResumeData] = useState(RESUME_DATA_EN);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Update the language state
    setResumeData(newLanguage === 'en' ? RESUME_DATA_EN : RESUME_DATA_DE);
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />


      {/* Replace RESUME_DATA with resumeData in your rendering logic */}
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{resumeData.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {resumeData.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={resumeData.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {resumeData.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {resumeData.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${resumeData.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {resumeData.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${resumeData.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {resumeData.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {resumeData.contact.email ? (
                <a href={`mailto:${resumeData.contact.email}`}>
                  <span className="underline">{resumeData.contact.email}</span>
                </a>
              ) : null}
              {resumeData.contact.tel ? (
                <a href={`tel:${resumeData.contact.tel}`}>
                  <span className="underline">{resumeData.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {resumeData.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {resumeData.work.map((work) => {
            return (
              <Card key={work.company}>
                <div className="flex" style={{ alignItems: 'flex-start' }}>
                  <img
                    src={work.logo.src || ''}
                    alt="Company Logo"
                    style={{
                      width: '50px',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      marginRight: '25px',
                      marginTop: '10px'
                    }}
                  />
                  <div>
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">

                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <a className="hover:underline" href={work.link}>
                            {work.company}
                          </a>

                          <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          {work.start} - {work.end}
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none">
                        {work.title}
                      </h4>
                    </CardHeader>

                    <CardContent className="mt-2 text-xs">
                      {work.description}
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {resumeData.education.map((education) => {
            return (
              <Card key={education.school}>

                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {resumeData.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Awards</h2>
          <div className="flex flex-wrap gap-1">
            {resumeData.awards.map((award) => {
              return <Badge key={award}>{award}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {resumeData.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Seed Partnerships</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {resumeData.seeds.map((seed) => {
              return (
                <ProjectCard
                  key={seed.title}
                  title={seed.title}
                  description={seed.description}
                  tags={seed.techStack}
                  link={"link" in seed ? seed.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

      </section>

      <CommandMenu
        links={[
          {
            url: resumeData.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...resumeData.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
