import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Framework({
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
        <path d="M5.75 7.115L9 5.23V9L5.75 10.885V7.115Z" fill={fill} />
        <path
          d="M9 9L12.25 10.885L9 12.77L5.75 10.885L9 9Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M9 5.23L12.25 7.115V10.885L9 9V5.23Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7217 5.3691C15.6874 5.2961 15.6674 5.217 15.6269 5.1472L12.25 7.115V10.885L9 12.77L9.0004 16.6865C9.4775 16.6865 9.9545 16.5635 10.3803 16.3169L14.6303 13.8521C15.18 13.5333 15.5742 13.0274 15.7968 12.45L15.7217 5.3691Z"
          fill={fill}
        />
        <path
          d="M9 12.77L5.75 10.885V7.11501L2.3659 5.16071C2.1309 5.57091 2 6.04061 2 6.52691V11.4732C2 12.4503 2.5254 13.3619 3.3706 13.8521L7.6211 16.3169C8.0464 16.5635 8.5234 16.6865 9.0004 16.6865L9 12.77Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75001 7.115L9.00001 5.23L12.25 7.115L15.6269 5.1472C15.3901 4.7395 15.0502 4.3913 14.6304 4.1479L10.3799 1.6831C9.52931 1.1899 8.47171 1.1899 7.62111 1.6831L3.37061 4.1479C2.94611 4.394 2.60301 4.747 2.36591 5.1606L5.75001 7.115Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Framework;
