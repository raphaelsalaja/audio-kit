import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighHeelsShoes({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.75"
          x2="3.75"
          y1="15.25"
          y2="9.964"
        />
        <path
          d="M3.749,9.964c-1.195-.692-1.999-1.984-1.999-3.464,0-1.625,.979-3.163,2.25-3.75,2.082,4.017,5.485,7.292,8.84,9.152,.431,.239,.918,.348,1.41,.348h0c1.105,0,2,.895,2,2v.5c0,.276-.224,.5-.5,.5h-3.567c-.684,0-1.328-.341-1.685-.924-.657-1.073-1.852-2.578-3.831-3.534-1.103-.532-2.136-.744-2.917-.828h-.001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HighHeelsShoes;
