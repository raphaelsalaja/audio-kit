import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareNut({
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
          d="M4.75 2.75H13.25C14.3546 2.75 15.25 3.64543 15.25 4.75V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75ZM12.25 7.69099V10.309C12.25 10.666 12.06 10.995 11.752 11.174L9.50198 12.479C9.19198 12.659 8.80898 12.659 8.49898 12.479L6.24898 11.174C5.94098 10.995 5.75098 10.666 5.75098 10.309V7.69099C5.75098 7.33399 5.94098 7.00499 6.24898 6.82599L8.49898 5.52099C8.80898 5.34099 9.19198 5.34099 9.50198 5.52099L11.752 6.82599C12.06 7.00499 12.25 7.33399 12.25 7.69099Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 10.309V7.69099C12.25 7.33399 12.06 7.00499 11.752 6.82599L9.50198 5.52099C9.19198 5.34099 8.80898 5.34099 8.49898 5.52099L6.24898 6.82599C5.94098 7.00499 5.75098 7.33399 5.75098 7.69099V10.309C5.75098 10.666 5.94098 10.995 6.24898 11.174L8.49898 12.479C8.80898 12.659 9.19198 12.659 9.50198 12.479L11.752 11.174C12.06 10.995 12.25 10.666 12.25 10.309Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareNut;
