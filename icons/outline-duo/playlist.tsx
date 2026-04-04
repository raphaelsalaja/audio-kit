import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist({
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
          d="M4.25 4.75H13.75C14.8546 4.75 15.75 5.64543 15.75 6.75V13.25C15.75 14.3546 14.8546 15.25 13.75 15.25H4.25C3.14543 15.25 2.25 14.3546 2.25 13.25V6.75C2.25 5.64543 3.14543 4.75 4.25 4.75ZM7.897 7.797L11.037 9.629V9.627C11.321 9.793 11.321 10.204 11.037 10.37L7.897 12.202C7.61 12.37 7.25 12.163 7.25 11.831V8.168C7.25 7.837 7.61 7.63 7.897 7.797Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.037 9.629L7.897 7.797C7.61 7.63 7.25 7.837 7.25 8.168V11.831C7.25 12.163 7.61 12.37 7.897 12.202L11.037 10.37C11.321 10.204 11.321 9.793 11.037 9.627V9.629Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.75H4.25C3.14543 4.75 2.25 5.64543 2.25 6.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V6.75C15.75 5.64543 14.8546 4.75 13.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 1.75H13.25"
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

export default Playlist;
