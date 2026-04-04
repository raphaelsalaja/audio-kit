import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneLanding({
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
          x1="2.75"
          x2="15.25"
          y1="15.25"
          y2="15.25"
        />
        <path
          d="M1.617,5.273l1.476-.041c.4-.011,.768,.218,.936,.582l.709,1.541,10.149,1.681c.896,.136,1.505,.982,1.35,1.875h0c-.151,.869-.972,1.456-1.843,1.319l-8.422-1.45c-.257-.044-.503-.138-.724-.277l-2.09-1.312c-.44-.276-.756-.713-.879-1.218l-.661-2.7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.942,7.894L5.625,2.181l1.704,.062c.337,.012,.645,.193,.819,.481l3.496,5.776"
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

export default PlaneLanding;
