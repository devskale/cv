// WorkCard.tsx
import * as React from "react";

import {
    Card,
    CardHeader,
    CardContent
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Work } from "./types"; // Import the 'Work' type from the appropriate file
import Image from 'next/image';


export default function WorkCard({ work }: { work: Work }) {
    return (
        <Card key={work.company}>
            <div className="flex" style={{ alignItems: 'flex-start' }}>
                <Image
                    src={work.logo.src || ''}
                    alt="Company Logo"
                    width={50}
                    height={50}
                    objectFit="contain"
                    className="grayscale mr-6 mt-2"
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
}