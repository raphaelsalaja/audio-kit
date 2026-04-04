import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputField({
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
          d="M8.5 11.872C7.627 11.562 7 10.728 7 9.75C7 8.772 7.627 7.93799 8.5 7.62799V4H3.75C2.233 4 1 5.233 1 6.75V11.25C1 12.767 2.233 14 3.75 14H8.5V11.872Z"
          fill={fill}
        />
        <path
          d="M14.25 4H13V7.62799C13.873 7.93799 14.5 8.772 14.5 9.75C14.5 10.728 13.873 11.562 13 11.872V14H14.25C15.767 14 17 12.767 17 11.25V6.75C17 5.233 15.767 4 14.25 4Z"
          fill={fill}
        />
        <path
          d="M12.75 15.5C12.061 15.5 11.5 14.939 11.5 14.25V10.5H12.25C12.664 10.5 13 10.164 13 9.75C13 9.336 12.664 9 12.25 9H11.5V3.75C11.5 3.061 12.061 2.5 12.75 2.5C13.164 2.5 13.5 2.164 13.5 1.75C13.5 1.336 13.164 1 12.75 1C11.96 1 11.252 1.339 10.75 1.875C10.248 1.34 9.54 1 8.75 1C8.336 1 8 1.336 8 1.75C8 2.164 8.336 2.5 8.75 2.5C9.439 2.5 10 3.061 10 3.75V9H9.25C8.836 9 8.5 9.336 8.5 9.75C8.5 10.164 8.836 10.5 9.25 10.5H10V14.25C10 14.939 9.439 15.5 8.75 15.5C8.336 15.5 8 15.836 8 16.25C8 16.664 8.336 17 8.75 17C9.54 17 10.248 16.661 10.75 16.125C11.252 16.66 11.96 17 12.75 17C13.164 17 13.5 16.664 13.5 16.25C13.5 15.836 13.164 15.5 12.75 15.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default InputField;
