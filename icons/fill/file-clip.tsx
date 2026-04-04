import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileClip({
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
          d="M17.25 12C16.836 12 16.5 12.336 16.5 12.75V14.75C16.5 15.715 15.715 16.5 14.75 16.5C13.785 16.5 13 15.715 13 14.75V12.25C13 11.974 13.224 11.75 13.5 11.75C13.776 11.75 14 11.974 14 12.25V14.25C14 14.664 14.336 15 14.75 15C15.164 15 15.5 14.664 15.5 14.25V12.25C15.5 11.147 14.603 10.25 13.5 10.25C12.397 10.25 11.5 11.147 11.5 12.25V14.75C11.5 16.542 12.958 18 14.75 18C16.542 18 18 16.542 18 14.75V12.75C18 12.336 17.664 12 17.25 12Z"
          fill={secondaryfill}
        />
        <path
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V9.8017C15.3645 9.15288 14.4788 8.75 13.5 8.75C11.5686 8.75 10 10.3186 10 12.25V14.75C10 15.5637 10.2053 16.33 10.5669 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512ZM5.75 6C5.33579 6 5 6.33579 5 6.75C5 7.16421 5.33579 7.5 5.75 7.5H7.75C8.16421 7.5 8.5 7.16421 8.5 6.75C8.5 6.33579 8.16421 6 7.75 6H5.75ZM5 9.75C5 9.33579 5.33579 9 5.75 9H9.25C9.66421 9 10 9.33579 10 9.75C10 10.1642 9.66421 10.5 9.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75ZM11.501 6.499C10.951 6.499 10.501 6.049 10.501 5.499L10.5 2.578L14.433 6.499H11.501Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileClip;
