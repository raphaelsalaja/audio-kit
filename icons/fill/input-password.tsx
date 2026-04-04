import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPassword({
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
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
        />
        <path
          d="M16 11.525V10.25C16 9.009 14.99 8 13.75 8C12.51 8 11.5 9.009 11.5 10.25V11.525C10.654 11.648 10 12.37 10 13.25V15.25C10 16.215 10.785 17 11.75 17H15.75C16.715 17 17.5 16.215 17.5 15.25V13.25C17.5 12.371 16.846 11.648 16 11.525ZM13.75 9.5C14.163 9.5 14.5 9.836 14.5 10.25V11.5H13V10.25C13 9.836 13.337 9.5 13.75 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75 14H3.75C2.2339 14 1 12.7666 1 11.25V6.75C1 5.2334 2.2339 4 3.75 4H14.25C15.6245 4 16.7935 5.03223 16.9688 6.40143C17.021 6.81203 16.731 7.18798 16.3199 7.24078C15.9117 7.28818 15.5333 7.00252 15.4805 6.59192C15.4009 5.96932 14.8721 5.50012 14.25 5.50012H3.75C3.0605 5.50012 2.5 6.06062 2.5 6.75012V11.2501C2.5 11.9396 3.0605 12.5001 3.75 12.5001H7.75C8.1641 12.5001 8.5 12.836 8.5 13.2501C8.5 13.6642 8.1641 14 7.75 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputPassword;
