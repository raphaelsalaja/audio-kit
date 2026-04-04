import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box2Minus({
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
          d="M11.696 2.39753L4.94565 5.39761L5.55484 6.76834L12.3052 3.76825L11.696 2.39753Z"
          fill={fill}
        />
        <path
          d="M17.25 14H12.25C11.836 14 11.5 13.664 11.5 13.25C11.5 12.836 11.836 12.5 12.25 12.5H17.25C17.664 12.5 18 12.836 18 13.25C18 13.664 17.664 14 17.25 14Z"
          fill={secondaryfill}
        />
        <path
          d="M16.055 4.06399L9.712 1.24699C9.261 1.04499 8.743 1.04499 8.29 1.24699L1.945 4.06399C1.674 4.18499 1.5 4.45299 1.5 4.74999V12.6C1.5 13.29 1.908 13.918 2.539 14.199L8.29 16.756C8.516 16.856 8.758 16.906 9 16.906C9.242 16.906 9.485 16.856 9.71 16.755L10.7236 16.3051C11.1016 16.1371 11.2726 15.6941 11.1036 15.3151C10.9366 14.9371 10.4926 14.7641 10.1136 14.9351L9.748 15.096V8.23599L14.998 5.90299V10.25C14.998 10.664 15.334 11 15.748 11C16.162 11 16.498 10.664 16.498 10.25V4.74999C16.498 4.45399 16.323 4.18499 16.053 4.06399H16.055ZM8.9 2.61599C8.963 2.58799 9.037 2.58699 9.102 2.61599L13.904 4.74899L9.102 6.88299C9.039 6.91099 8.965 6.91199 8.9 6.88299L4.098 4.74899L8.9 2.61599Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Box2Minus;
