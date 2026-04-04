import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSad2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1ZM5,9c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.651,4.634c-.125,.079-.264,.116-.4,.116-.249,0-.492-.124-.635-.349-.354-.559-.958-.893-1.616-.893s-1.263,.333-1.616,.893c-.222,.35-.683,.455-1.035,.233-.35-.221-.454-.685-.232-1.035,.63-.996,1.708-1.591,2.884-1.591s2.254,.595,2.884,1.591c.222,.35,.117,.813-.232,1.035Zm.349-3.634c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSad2;
