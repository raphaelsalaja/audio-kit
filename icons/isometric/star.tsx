import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Star({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M13.3005 1.6895L10.446 2.89214L12.5282 10.2976L15.6276 8.66508L13.3005 1.6895Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17.284 13.9218L14.5215 15.1898L15.7216 22.4354L18.869 20.9863L17.284 13.9218Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M15.7654 8.724L12.6484 10.2963"
          stroke={fill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M2.61186 5.46453L7.83517 8.10636L10.2857 2.95361L12.566 10.4702L18.2907 13.3394L14.4305 15.2552L15.6864 22.3534"
          stroke={fill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M9.10339 5.42584L5.92333 3.84981C5.71293 3.74553 5.46583 3.74582 5.25567 3.85059L3.02087 4.96467C2.62583 5.16161 2.48545 5.65543 2.71783 6.03073L6.32372 11.8543L4.87631 16.939H10.1004L15.3465 22.2078C15.5747 22.437 15.9241 22.4941 16.2134 22.3494L18.297 21.3074C18.6029 21.1545 18.7666 20.8139 18.6949 20.4794L17.2739 13.8519L20.8106 12.0551C21.1803 11.8673 21.1739 11.3371 20.7998 11.1582L15.5968 8.67078L13.6261 2.25784C13.4896 1.8137 12.9862 1.59926 12.5714 1.80853L10.248 2.98054"
          stroke={fill}
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}

export default Star;
