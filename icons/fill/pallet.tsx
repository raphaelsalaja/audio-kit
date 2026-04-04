import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pallet({
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
          d="M7.50266 12.25C7.91687 12.25 8.25266 12.5858 8.25266 13V14H10.0027V13C10.0027 12.5858 10.3385 12.25 10.7527 12.25C11.1669 12.25 11.5027 12.5858 11.5027 13V14.25C11.5027 14.9403 10.943 15.5 10.2527 15.5H8.00266C7.31234 15.5 6.75266 14.9403 6.75266 14.25V13C6.75266 12.5858 7.08844 12.25 7.50266 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.00266 14V11.5H16.0027V14H14.0027V13C14.0027 12.5858 13.6669 12.25 13.2527 12.25C12.8385 12.25 12.5027 12.5858 12.5027 13V14.25C12.5027 14.9403 13.0624 15.5 13.7527 15.5H16.2527C16.943 15.5 17.5027 14.9403 17.5027 14.25V10.75C17.5027 10.6812 17.4932 10.6128 17.4746 10.5466L15.5667 3.77568C15.3539 3.02124 14.6657 2.5 13.8817 2.5H4.12343C3.3397 2.5 2.65135 3.02107 2.43875 3.77559L0.530768 10.5466C0.512115 10.6128 0.502655 10.6812 0.502655 10.75V14.25C0.502655 14.9403 1.06234 15.5 1.75266 15.5H4.00265C4.69297 15.5 5.25266 14.9403 5.25266 14.25V13C5.25266 12.5858 4.91687 12.25 4.50265 12.25C4.08844 12.25 3.75265 12.5858 3.75265 13V14H2.00266ZM13.0154 4H11.5L12.3616 10H13.877L13.0154 4ZM4.12302 10L4.98461 4H6.5L5.63841 10H4.12302ZM9.75266 10H8.25265V4H9.75266V10Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pallet;
