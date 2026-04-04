import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneCheck({
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
          d="M15.3459 11.7544L12.4199 10.4554C11.7069 10.1384 10.8689 10.3414 10.3799 10.9494L9.14542 12.1382C7.83842 11.2842 6.72242 10.1672 5.86842 8.85822L7.07204 7.62886C7.68105 7.14086 7.88505 6.30186 7.56905 5.58886L6.26904 2.66086C5.92604 1.88886 5.08405 1.48286 4.26505 1.69386L2.29042 2.20822C1.44442 2.42822 0.897417 3.24822 1.01742 4.11522C1.95142 10.7642 7.24642 16.0602 13.8974 16.9942C13.9774 17.0052 14.0554 17.0102 14.1334 17.0102C14.9074 17.0102 15.6014 16.4882 15.8024 15.7202L16.3119 13.7564C16.5229 12.9394 16.1169 12.0974 15.3459 11.7544Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.4519 1.4014C16.7825 1.65097 16.8481 2.12127 16.5986 2.45187L13.2016 6.95187C13.0736 7.12141 12.8797 7.22873 12.6681 7.24717C12.4565 7.2656 12.2469 7.19344 12.0916 7.04858L10.4826 5.54858C10.1796 5.26613 10.163 4.79155 10.4454 4.48857C10.7279 4.1856 11.2024 4.16896 11.5054 4.45141L12.5058 5.38398L15.4014 1.54813C15.651 1.21753 16.1213 1.15184 16.4519 1.4014Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PhoneCheck;
