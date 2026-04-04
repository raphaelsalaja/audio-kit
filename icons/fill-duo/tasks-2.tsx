import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tasks2({
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
          d="M13.75 4.5H7.25C5.73122 4.5 4.5 5.73122 4.5 7.25V13.75C4.5 15.2688 5.73122 16.5 7.25 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.25C16.5 5.73122 15.2688 4.5 13.75 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.50001 13.75V7.24996C4.50001 5.73336 5.7334 4.49996 7.25 4.49996H13.0542L12.8998 3.4609C12.6769 1.9609 11.2757 0.922078 9.7755 1.14498L3.3461 2.10006C1.846 2.32296 0.807211 3.72432 1.03011 5.22432L1.98531 11.6538C2.17881 12.956 3.261 13.908 4.5244 13.9912C4.5173 13.9106 4.50001 13.8325 4.50001 13.75Z"
          fill={fill}
        />
        <path
          d="M9.60652 13.5C9.41702 13.5 9.23442 13.4287 9.09482 13.2988L7.48542 11.7988C7.18272 11.5161 7.16612 11.0415 7.44832 10.7387C7.73152 10.434 8.20612 10.4199 8.50882 10.7011L9.50882 11.6337L12.4043 7.79835C12.6533 7.46725 13.1231 7.40076 13.4551 7.65126C13.7852 7.90076 13.8516 8.37107 13.6016 8.70167L10.2051 13.2017C10.0772 13.3716 9.88282 13.4785 9.67192 13.497C9.64942 13.499 9.62802 13.5 9.60652 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tasks2;
