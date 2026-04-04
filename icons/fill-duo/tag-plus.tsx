import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagPlus({
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
          d="M14.25 10.5C13.0098 10.5 12 9.4907 12 8.25V8H11.75C10.5098 8 9.5 6.9907 9.5 5.75C9.5 4.646 10.3009 3.73 11.3509 3.5403L10.1162 2.30569C9.5967 1.78619 8.90621 1.5 8.17191 1.5H3.25C2.2852 1.5 1.5 2.2852 1.5 3.25V8.17191C1.5 8.90631 1.78609 9.5967 2.30569 10.1162L8.05569 15.8662C8.59179 16.4023 9.2959 16.6704 10 16.6704C10.7041 16.6704 11.4082 16.4023 11.9443 15.8662L15.8662 11.9443C16.7028 11.1076 16.8774 9.86571 16.4086 8.84911C16.1443 9.79781 15.2814 10.5 14.25 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25 7.5C6.94036 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 6.94036 5 6.25 5C5.55964 5 5 5.55964 5 6.25C5 6.94036 5.55964 7.5 6.25 7.5Z"
          fill={fill}
        />
        <path
          d="M16.75 5H15V3.25C15 2.8359 14.6641 2.5 14.25 2.5C13.8359 2.5 13.5 2.8359 13.5 3.25V5H11.75C11.3359 5 11 5.3359 11 5.75C11 6.1641 11.3359 6.5 11.75 6.5H13.5V8.25C13.5 8.6641 13.8359 9 14.25 9C14.6641 9 15 8.6641 15 8.25V6.5H16.75C17.1641 6.5 17.5 6.1641 17.5 5.75C17.5 5.3359 17.1641 5 16.75 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TagPlus;
