import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordPointer({
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
          d="M8.65344 11.8989C8.31064 10.9697 8.53433 9.95111 9.23843 9.24561C9.71693 8.76511 10.3527 8.5 11.0265 8.5C11.3107 8.5 11.5919 8.5474 11.8615 8.6416C11.8695 8.6443 14.2463 9.51217 16.0002 10.1528V6.75C16.0002 5.2334 14.7668 4 13.2502 4H2.75024C1.23364 4 0.000244141 5.2334 0.000244141 6.75V11.25C0.000244141 12.7666 1.23364 14 2.75024 14H9.42093L8.65344 11.8989Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.00012 10C4.55241 10 5.00012 9.55228 5.00012 9C5.00012 8.44772 4.55241 8 4.00012 8C3.44784 8 3.00012 8.44772 3.00012 9C3.00012 9.55228 3.44784 10 4.00012 10Z"
          fill={fill}
        />
        <path
          d="M7.50012 10C8.05241 10 8.50012 9.55228 8.50012 9C8.50012 8.44772 8.05241 8 7.50012 8C6.94784 8 6.50012 8.44772 6.50012 9C6.50012 9.55228 6.94784 10 7.50012 10Z"
          fill={fill}
        />
        <path
          d="M17.3243 12.2334L11.3839 10.0634C11.3829 10.0634 11.3819 10.063 11.3819 10.063C11.0001 9.92426 10.586 10.018 10.2999 10.3051C10.0138 10.5917 9.9229 11.0058 10.0626 11.3842L12.2325 17.3252C12.3819 17.7314 12.7686 18.0005 13.1993 18.0005H13.2218C13.6613 17.9907 14.047 17.7031 14.1798 17.2847L14.9327 14.9336L17.2813 14.1815C17.7022 14.0482 17.9903 13.6626 17.9991 13.2212C18.0089 12.7808 17.7364 12.3833 17.3243 12.2334Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputPasswordPointer;
