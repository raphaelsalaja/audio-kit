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
          d="M8.50012 13.25C8.50012 12.1235 9.09432 11.106 10.0001 10.5225V10.25C10.0001 8.1821 11.6822 6.5 13.7501 6.5C15.148 6.5 16.3553 7.27779 17.0001 8.41479V6.75C17.0001 5.2334 15.7667 4 14.2501 4H3.75012C2.23352 4 1.00012 5.2334 1.00012 6.75V11.25C1.00012 12.7666 2.23352 14 3.75012 14H8.50012V13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.50012 10C5.05241 10 5.50012 9.55228 5.50012 9C5.50012 8.44772 5.05241 8 4.50012 8C3.94784 8 3.50012 8.44772 3.50012 9C3.50012 9.55228 3.94784 10 4.50012 10Z"
          fill={fill}
        />
        <path
          d="M8.00012 10C8.55241 10 9.00012 9.55228 9.00012 9C9.00012 8.44772 8.55241 8 8.00012 8C7.44784 8 7.00012 8.44772 7.00012 9C7.00012 9.55228 7.44784 10 8.00012 10Z"
          fill={fill}
        />
        <path
          d="M16.0001 11.5254V10.25C16.0001 9.0093 14.9908 8 13.7501 8C12.5094 8 11.5001 9.0093 11.5001 10.25V11.5254C10.6542 11.648 10.0001 12.3706 10.0001 13.25V15.25C10.0001 16.2148 10.7853 17 11.7501 17H15.7501C16.7149 17 17.5001 16.2148 17.5001 15.25V13.25C17.5001 12.3706 16.846 11.6479 16.0001 11.5254ZM13.7501 9.5C14.1637 9.5 14.5001 9.8364 14.5001 10.25V11.5H13.0001V10.25C13.0001 9.8364 13.3365 9.5 13.7501 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default InputPassword;
