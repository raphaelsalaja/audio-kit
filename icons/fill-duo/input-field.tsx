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
          d="M14.25 4H3.75C2.2312 4 1 5.231 1 6.75V11.25C1 12.769 2.2312 14 3.75 14H14.25C15.7688 14 17 12.769 17 11.25V6.75C17 5.231 15.7688 4 14.25 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.75 15.5C12.0605 15.5 11.5 14.939 11.5 14.25V10.5H12.25C12.6641 10.5 13 10.164 13 9.75C13 9.336 12.6641 9 12.25 9H11.5V3.75C11.5 3.061 12.0605 2.5 12.75 2.5C13.1641 2.5 13.5 2.164 13.5 1.75C13.5 1.336 13.1641 1 12.75 1C11.96 1 11.252 1.339 10.75 1.875C10.248 1.339 9.54 1 8.75 1C8.3359 1 8 1.336 8 1.75C8 2.164 8.3359 2.5 8.75 2.5C9.4395 2.5 10 3.061 10 3.75V9H9.25C8.8359 9 8.5 9.336 8.5 9.75C8.5 10.164 8.8359 10.5 9.25 10.5H10V14.25C10 14.939 9.4395 15.5 8.75 15.5C8.3359 15.5 8 15.836 8 16.25C8 16.664 8.3359 17 8.75 17C9.54 17 10.248 16.661 10.75 16.125C11.252 16.661 11.96 17 12.75 17C13.1641 17 13.5 16.664 13.5 16.25C13.5 15.836 13.1641 15.5 12.75 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputField;
