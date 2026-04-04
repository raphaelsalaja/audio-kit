import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonUser({
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
          d="M7.61985 1.68365C8.47349 1.18879 9.52552 1.18879 10.3791 1.68365L14.6293 4.14873C15.4772 4.6407 16 5.5467 16 6.52749V11.4735C16 12.4536 15.4789 13.3599 14.6304 13.8522L10.3803 16.3173C9.52665 16.8121 8.47449 16.8122 7.62085 16.3174L3.37071 13.8523C2.52281 13.3603 2 12.4543 2 11.4735V6.52749C2 5.5467 2.5227 4.64077 3.3706 4.14879L7.61985 1.68365Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.519 14.4968L10.3803 16.3173C9.52667 16.8121 8.4745 16.8122 7.62086 16.3174L4.4837 14.4978L4.89953 13.8513C5.72335 12.4463 7.25031 11.5005 9.00004 11.5005C10.7493 11.5005 12.2759 12.4458 13.0999 13.8502L13.519 14.4968Z"
          fill={fill}
        />
        <path
          d="M6.74811 7.75049C6.74811 6.50742 7.75552 5.50049 8.99811 5.50049C10.2407 5.50049 11.2481 6.50742 11.2481 7.75049C11.2481 8.99356 10.2407 10.0005 8.99811 10.0005C7.75552 10.0005 6.74811 8.99356 6.74811 7.75049Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HexagonUser;
