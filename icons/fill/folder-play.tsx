import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderPlay({
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
          d="M9.5,11.772c0-.991,.535-1.913,1.396-2.406,.423-.24,.898-.365,1.379-.365,.496,0,.982,.132,1.407,.383l2.818,1.661V6.25c0-1.516-1.233-2.75-2.75-2.75h-5.026l-.378-.471c-.525-.654-1.307-1.029-2.145-1.029h-1.951c-1.517,0-2.75,1.234-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h5.25v-4.228ZM3,6.314v-1.564c0-.689,.561-1.25,1.25-1.25h1.951c.381,0,.737,.17,.975,.467l.603,.752c.142,.177,.357,.281,.585,.281h5.386c.689,0,1.25,.561,1.25,1.25v.064c-.377-.194-.798-.314-1.25-.314H4.25c-.452,0-.873,.12-1.25,.314Z"
          fill={fill}
        />
        <path
          d="M17.124,13.155l-4.204-2.478h0c-.393-.232-.883-.233-1.279-.009-.395,.226-.641,.649-.641,1.104v4.955c0,.455,.246,.878,.641,1.104,.196,.111,.414,.167,.632,.167,.224,0,.448-.059,.647-.176l4.204-2.478c.392-.231,.625-.641,.625-1.095s-.234-.864-.626-1.095Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FolderPlay;
