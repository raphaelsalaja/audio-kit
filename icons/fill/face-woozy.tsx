import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceWoozy({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1ZM5,9c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6.53,3.694c-.293,.293-.768,.293-1.061,0-.259-.259-.681-.259-.939,0-.422,.422-.976,.633-1.53,.633s-1.108-.211-1.53-.633c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0c.259,.259,.681,.259,.939,0,.844-.844,2.217-.844,3.061,0,.293,.293,.293,.768,0,1.061Zm-.03-2.694c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceWoozy;
