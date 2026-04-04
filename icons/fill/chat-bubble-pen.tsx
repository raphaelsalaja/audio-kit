import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubblePen({
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
          d="M17.3645 9.98263L17.0291 9.64723C16.3689 8.98563 15.2161 8.98613 14.554 9.64673L11.3928 12.8078C11.3122 12.8884 11.2512 12.986 11.2141 13.0934L10.2932 15.7643C10.1994 16.0358 10.2688 16.3366 10.4719 16.5392C10.615 16.6823 10.8064 16.7589 11.0022 16.7589C11.0842 16.7589 11.1668 16.7457 11.2468 16.7179L13.9177 15.797C14.0251 15.7599 14.1228 15.6989 14.2033 15.6183L17.3644 12.4572C17.695 12.1266 17.8771 11.6872 17.8771 11.2199C17.8771 10.7521 17.6951 10.3127 17.3645 9.98263Z"
          fill={secondaryfill}
        />
        <path
          d="M9.31483 14L9.79627 12.6037C9.90759 12.2814 10.0907 11.9886 10.3321 11.7472L13.4945 8.58487C14.2947 7.78649 15.4478 7.49912 16.501 7.72655V4.75C16.501 3.233 15.268 2 13.751 2H4.25C2.733 2 1.5 3.233 1.5 4.75V16.25C1.5 16.538 1.665 16.801 1.925 16.926C2.029 16.976 2.14 17 2.25 17C2.417 17 2.583 16.944 2.719 16.835L6.263 14H9.31483Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChatBubblePen;
