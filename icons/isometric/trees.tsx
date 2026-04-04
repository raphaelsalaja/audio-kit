import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trees({
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
          d="M14 12.5L14.8047 13.6582L13 17L13.5 18L13.4658 18.0342C13.183 18.3167 12.7589 18.4034 12.3877 18.2549L11.6709 17.9688C11.0727 17.7293 10.8541 16.9947 11.2236 16.4668L12.8574 14.1309C10.5393 15.2411 5.5 14.0607 5.5 11.5L5.95117 11L8.5 12H10L13.0488 11L14 12.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M16 20.5V19H19V20.5L17.5 21L16 20.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7.5 21.5V19H11.5V21.5L9.5 22L7.5 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7.5 19V21.0432C7.5 21.5716 8.39543 22 9.5 22C10.6046 22 11.5 21.5716 11.5 21.0432V19"
          stroke={fill}
        />
        <path
          d="M16 19V20.0432C16 21.3877 19 21.3877 19 20.0432V19"
          stroke={fill}
        />
        <path
          d="M5.83843 11L3.1464 15.4113C3.05065 15.5682 2.99324 15.7496 3.02239 15.9311C3.29844 17.6496 6.09313 19 9.5 19C11.2465 19 12.8321 18.6451 14 18.0677M13.1616 11L14.5808 13.3256L14.7679 13.6323"
          stroke={fill}
        />
        <path
          d="M17.5 19C19.8125 19 21.7176 18.0728 21.9713 16.8796C22.0086 16.7044 21.9519 16.5266 21.8607 16.3725L17.9304 9.72758C17.7368 9.40031 17.2632 9.40031 17.0696 9.72758L13.1393 16.3725C13.0481 16.5266 12.9914 16.7044 13.0287 16.8796C13.2824 18.0728 15.1875 19 17.5 19Z"
          stroke={fill}
        />
        <path
          d="M9.5 12C11.8125 12 13.7176 11.0728 13.9713 9.8796C14.0086 9.70441 13.9519 9.52664 13.8607 9.37248L9.93035 2.72758C9.73678 2.40031 9.26322 2.40031 9.06965 2.72758L5.13929 9.37248C5.04811 9.52664 4.99144 9.70441 5.02869 9.8796C5.28241 11.0728 7.1875 12 9.5 12Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Trees;
