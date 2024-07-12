"use client";

/* tslint:disable */

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";


const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      className
    )}
  >
    {children}
  </div>
));
Circle.displayName = 'Circle';

const Label = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex h-[85px] w-[85px] items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      className
    )}
  >
    {children}
  </div>
));
Label.displayName = 'Label';

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Breadcrumb
        pageName="How does it work?"
        description="Our deep learning model has been meticulously designed using a pre-trained architecture and trained on a diverse dataset of over 7000 chest X-ray (CXR) images to classify various lung diseases. To achieve optimal performance, we have implemented advanced techniques such as batch normalization and effective overfitting mitigation strategies.

        Utilizing technologies like early stopping, L2 regularization, and dropout, we ensure that the model generalizes well and maintains robust performance. Additionally, data augmentation techniques are employed to enrich the training dataset, ensuring the model is exposed to diverse scenarios.
        
        With a demonstrated accuracy exceeding 90%, our model provides reliable and accurate classification of lung diseases from CXR images. We are committed to leveraging cutting-edge technologies to enhance diagnostic accuracy and improve patient outcomes."
      />
      <div className="mt-[0px] flex h-[80vh] w-full items-center justify-center">
        <div
          className="bg-background relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border p-10 md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
            <div className="flex flex-col justify-center">
              <Circle ref={div7Ref} className="h-16 w-16">
                <img src="/images/tech/cxr.jpg" className="h-8 w-6" />
              </Circle>
            </div>
            <div className="flex flex-col justify-center">
              <Circle ref={div6Ref} className="h-16 w-16">
                <img
                  src="/images/tech/tensorflow-removebg-preview.png"
                  className="h-8 w-8"
                />
              </Circle>
            </div>
            <div className="flex flex-col justify-center gap-2 text-sm text-primary">
              <Label ref={div1Ref}>
                <div className="h-30 w-30 text-center">Normal</div>
              </Label>
              <Label ref={div2Ref}>
                <div className="h-30 w-30 text-center">Covid19</div>
              </Label>
              <Label ref={div3Ref}>
                <div className="h-30 w-30 text-center">Tuberculosis</div>
              </Label>
              <Label ref={div4Ref}>
                <div className="h-30 w-30 text-center">Pneumonia</div>
              </Label>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div6Ref}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div7Ref}
            duration={3}
          />
        </div>
      </div>
    </>
  );
}
/* tslint:enable comment-format */