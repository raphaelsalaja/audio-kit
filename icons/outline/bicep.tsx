import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bicep({
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
          d="M5.224,5.671c-.753,3.106,1.082,3.424,1.824,5.197,1.046-1.239,4.63-2.647,6.938-1.463s2.555,4.431,.677,5.664c-1.107,.726-2.803,1.174-4.322,1.175-1.731,.044-2.98-.136-3.523-.408-.898,.115-2.795,.102-3.57-.687-.532-.541-1.618-3.646-.967-6.958,.691-3.496,1.844-6.44,3.089-6.44,.61,0,1.601,.02,2.064,.395s.249,1.196-.015,1.648c.323,.259,.392,.724,.159,1.066-.376,.428-.865,.741-1.411,.903-.313,.085-.686-.016-.942-.092Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75,13c1.438,.506,3.285,.129,4.5-.703"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Bicep;
