import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Book({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M7 4.5L5 3.5V17.5L7 19V4.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M13 11.8923L13 8.73607C13 7.51384 12.572 7.286 11.8944 6.94721L11.4472 6.72361C10.7823 6.39115 10 5.47511 10 7.61803L10 10.2756C10 10.3863 10.1095 10.4584 10.2028 10.4091L11.2775 9.84059C11.4045 9.77342 11.5587 9.81755 11.6368 9.94341L12.8713 11.9334C12.9096 11.9951 13 11.9663 13 11.8923Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M13 7.5L13 11.8924C13 11.9663 12.9096 11.9951 12.8713 11.9334L11.6368 9.94341C11.5587 9.81755 11.4045 9.77342 11.2775 9.84059L10.2028 10.4091C10.1095 10.4584 10 10.3863 10 10.2756L10 6"
          stroke={fill}
        />
        <path d="M7 4.5V19" stroke={fill} />
        <path
          d="M5 3.5L14.1708 8.08541C14.679 8.3395 15 8.85889 15 9.42705V21.7865C15 22.344 14.4133 22.7066 13.9146 22.4573L5.82918 18.4146C5.321 18.1605 5 17.6411 5 17.0729V3.61803C5 3.23926 5.214 2.893 5.55279 2.72361L8.32918 1.33541C8.75147 1.12426 9.24853 1.12426 9.67082 1.33541L18.1708 5.58541C18.679 5.8395 19 6.35889 19 6.92705V19.7865C19 20.344 18.4133 20.7066 17.9146 20.4573L17.0339 20.0169"
          stroke={fill}
        />
        <path
          d="M9.02856 3.36768L16.1794 6.94312C16.6832 7.19499 17.0034 7.70782 17.0086 8.271L17.1227 20.7189C17.1279 21.2794 16.5387 21.6473 16.0374 21.3966L15.0029 20.8793"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Book;
