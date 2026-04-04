import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ToolMesh({
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
          d="M3.75 2C2.22957 2 1 3.23701 1 4.75V13.25C1 14.763 2.22957 16 3.75 16H14.25C15.7704 16 17 14.763 17 13.25V4.75C17 3.23701 15.7704 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 6H1V7.5H17V6Z" fill={fill} />
        <path d="M17 10.5H1V12H17V10.5Z" fill={fill} />
        <path
          d="M10.4683 2.103C10.7447 2.6211 12.1231 5.3872 12.1231 9C12.1231 10.4189 11.9083 13.2021 10.4683 15.8965L10.413 16H12.0808C13.4014 13.2153 13.6231 10.4546 13.6231 9C13.6231 5.7983 12.6315 3.1909 12.087 2H10.4133L10.4683 2.103Z"
          fill={fill}
        />
        <path
          d="M5.03659 2.3081C5.06489 2.3335 7.86859 4.9614 7.86859 9C7.86859 9.6885 7.73189 13.248 5.03359 15.6943L4.69659 16H6.82119C9.16349 13.3081 9.36859 10.0195 9.36859 9C9.36859 5.668 7.75959 3.1978 6.77859 2H4.69299L5.03659 2.3081Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ToolMesh;
