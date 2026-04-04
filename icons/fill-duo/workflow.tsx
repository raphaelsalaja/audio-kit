import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Workflow({
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
          d="M3.75 7.5C5.26878 7.5 6.5 6.26878 6.5 4.75C6.5 3.23122 5.26878 2 3.75 2C2.23122 2 1 3.23122 1 4.75C1 6.26878 2.23122 7.5 3.75 7.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7803 12.7197L14.0303 9.96973C13.7373 9.67673 13.2627 9.67673 12.9698 9.96973C12.6769 10.2627 12.6768 10.7373 12.9698 11.0302L14.4395 12.4999H12.25C11.5605 12.4999 11 11.9394 11 11.2499V6.74988C11 5.23328 9.7666 3.99988 8.25 3.99988C7.8359 3.99988 7.5 4.33578 7.5 4.74988C7.5 5.16398 7.8359 5.49988 8.25 5.49988C8.9395 5.49988 9.5 6.06038 9.5 6.74988V11.2499C9.5 12.7665 10.7334 13.9999 12.25 13.9999H14.4395L12.9698 15.4696C12.6768 15.7626 12.6768 16.2373 12.9698 16.5302C13.1163 16.6767 13.3077 16.7498 13.5001 16.7498C13.6925 16.7498 13.8839 16.6767 14.0304 16.5302L16.7804 13.7802C17.0734 13.4872 17.0733 13.0126 16.7803 12.7197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Workflow;
