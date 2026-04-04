import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeMinus({
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
          d="M2.25 5.75H5L10.48 2.243C10.813 2.03 11.25 2.269 11.25 2.664V6.70802C10.367 7.0938 9.75 7.97484 9.75 9C9.75 10.0252 10.367 10.9062 11.25 11.292V15.337C11.25 15.732 10.813 15.971 10.48 15.758L5 12.25H2.25C1.422 12.25 0.75 11.578 0.75 10.75V7.25C0.75 6.422 1.422 5.75 2.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.25 6V2.664C11.25 2.269 10.813 2.03 10.48 2.243L5 5.751H2.25C1.422 5.751 0.75 6.423 0.75 7.251V10.751C0.75 11.579 1.422 12.251 2.25 12.251H5L10.48 15.759C10.813 15.972 11.25 15.733 11.25 15.338V12.002"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 9H12.25"
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

export default VolumeMinus;
