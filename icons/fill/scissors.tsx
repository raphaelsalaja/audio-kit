import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scissors({
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
          d="M9.25 7H6.583C6.841 6.557 7 6.049 7 5.5C7 3.846 5.654 2.5 4 2.5C2.346 2.5 1 3.846 1 5.5C1 7.154 2.346 8.5 4 8.5H9.25C9.664 8.5 10 8.164 10 7.75C10 7.336 9.664 7 9.25 7ZM2.5 5.5C2.5 4.673 3.173 4 4 4C4.827 4 5.5 4.673 5.5 5.5C5.5 6.327 4.827 7 4 7C3.173 7 2.5 6.327 2.5 5.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.528 2.468C14.234 2.176 13.759 2.178 13.467 2.472L4.877 11.131C4.877 11.131 4.877 11.132 4.876 11.133C4.312 11.699 4 12.45 4 13.25C4 14.05 4.312 14.805 4.879 15.371C5.445 15.938 6.199 16.25 7 16.25C7.801 16.25 8.555 15.938 9.121 15.371C9.688 14.805 10 14.051 10 13.25C10 12.449 9.688 11.695 9.121 11.129C8.736 10.744 8.251 10.5 7.738 10.377L14.532 3.528C14.824 3.234 14.822 2.76 14.528 2.468ZM8.5 13.25C8.5 13.65 8.344 14.027 8.061 14.311C7.495 14.877 6.506 14.877 5.94 14.311C5.657 14.028 5.501 13.651 5.501 13.25C5.501 12.849 5.657 12.473 5.94 12.189C6.223 11.905 6.6 11.75 7.001 11.75C7.402 11.75 7.778 11.906 8.062 12.189C8.346 12.472 8.501 12.849 8.501 13.25H8.5Z"
          fill={fill}
        />
        <path
          d="M12.7635 7.75C12.7635 7.33579 13.0993 7 13.5135 7H16.25C16.6642 7 17 7.33579 17 7.75C17 8.16421 16.6642 8.5 16.25 8.5H13.5135C13.0993 8.5 12.7635 8.16421 12.7635 7.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Scissors;
