import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopePhone({
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
          d="M17.2358 14.4995L16.375 14.1499C15.856 13.9194 15.2461 14.0684 14.9087 14.4902L13.9014 15.6596C13.2774 15.2558 12.7442 14.7226 12.3404 14.0986L13.4893 13.1079C13.9317 12.7534 14.0801 12.1435 13.8594 11.6465L13.4912 10.7422C13.2417 10.1817 12.6308 9.88531 11.9892 10.0537L10.8788 10.4184C10.3339 10.5971 9.9779 11.1162 10.0136 11.6806C10.2265 15.0624 12.9374 17.7734 16.3198 17.9863C16.3457 17.9878 16.3711 17.9887 16.3969 17.9887C16.9306 17.9887 17.4111 17.641 17.5815 17.121L17.9599 15.9652C18.1142 15.3705 17.8188 14.7583 17.2358 14.4995Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2C2.23128 2 1 3.23069 1 4.75V12.25C1 13.7693 2.23128 15 3.75 15H8.2641C8.67831 15 9.0141 14.6642 9.0141 14.25C9.0141 13.8358 8.67831 13.5 8.2641 13.5H3.75C3.061 13.5 2.5 12.939 2.5 12.25V6.021L8.154 9.141C8.419 9.287 8.71 9.36 9 9.36C9.29 9.36 9.581 9.287 9.846 9.141L15.5 6.021V11.8086C15.5 12.2228 15.8358 12.5586 16.25 12.5586C16.6642 12.5586 17 12.2228 17 11.8086V4.75C17 3.23069 15.7687 2 14.25 2H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopePhone;
