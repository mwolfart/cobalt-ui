// import {
//     ChangeEventHandler,
//     FocusEventHandler,
//     forwardRef,
//     useEffect,
//     useRef,
//     useState,
//   } from 'react';
//   import React from 'react';

//   import {InputField} from '../input-field';
//   import {Typography} from '../typography';
//   import './styles.scss'

//   type AutocompleteResult = {
//     id: string;
//     text: string;
//   };

//   type Props = {
//     onSearch: (
//       value: string
//     ) => AutocompleteResult[] | Promise<AutocompleteResult[]>;
//     onChange?: (value: string) => void;
//     onSuggestionClick?: (id: string) => void;
//     error?: string;
//     inputContainerStyle?: React.CSSProperties;
//     overlappingList?: boolean;
//   } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

//   const DEBOUNCE_MS = 500;
//   const MIN_CHARS_TO_SEARCH = 3;
//   const MAX_SUGGESTIONS = 3;

//   export const Autocomplete = forwardRef<HTMLInputElement, Props>(
//     (
//       {
//         error,
//         inputContainerStyle,
//         value,
//         onSearch,
//         onChange,
//         onSuggestionClick,
//         overlappingList,
//         ...props
//       },
//       ref
//     ) => {
//       const [suggestions, setSuggestions] = useState<AutocompleteResult[]>([]);
//       const [innerValue, setInnerValue] = useState(value || '');

//       const timeout = useRef<NodeJS.Timeout | null>(null);
//       const searchingText = useRef<string | null>(null);

//       useEffect(() => {
//         setInnerValue(value || '');
//       }, [value]);

//       const handleFetchSuggestions = async (valueToSearch: string) => {
//         try {
//           const suggestions = await onSearch(valueToSearch);
//           const valueHasChanged = searchingText.current !== valueToSearch;
//           if (!valueHasChanged) {
//             const slice = suggestions.slice(0, MAX_SUGGESTIONS);
//             setSuggestions(slice);
//           }
//         } catch {
//           setSuggestions([]);
//         }
//       };

//       const onInnerChange: ChangeEventHandler<HTMLInputElement> = evt => {
//         setSuggestions([]);
//         const newValue = evt.target.value;
//         searchingText.current = newValue;
//         setInnerValue(newValue);

//         const isFocused = document.activeElement === evt.currentTarget;
//         if (isFocused && newValue.length >= MIN_CHARS_TO_SEARCH) {
//           if (timeout.current) {
//             clearTimeout(timeout.current);
//           }
//           timeout.current = setTimeout(() => {
//             handleFetchSuggestions(newValue);
//           }, DEBOUNCE_MS);
//         }

//         if (onChange) {
//           onChange(newValue);
//         }
//       };

//       const onContainerBlur: FocusEventHandler<HTMLInputElement> = evt => {
//         if (evt.currentTarget.contains(evt.relatedTarget)) {
//           return;
//         }
//         if (overlappingList) {
//           setSuggestions([]);
//         }
//       };

//       const setValueWithSuggestion = (suggestion: AutocompleteResult) => {
//         setInnerValue(suggestion.text);
//         setSuggestions([]);
//         if (onSuggestionClick) {
//           onSuggestionClick(suggestion.id);
//         }
//       };

//       return (
//         <S.StyledAutocompleteWrapper onBlur={onContainerBlur}>
//           <Input
//             {...props}
//             error={error}
//             containerStyle={inputContainerStyle}
//             value={innerValue}
//             onChange={onInnerChange}
//             autoComplete="off"
//             ref={ref}
//           />
//           {suggestions.length > 0 && (
//             <S.StyledSuggestionList overlap={overlappingList}>
//               {suggestions.map((suggestion, i) => (
//                 <S.StyledSuggestion
//                   onClick={() => setValueWithSuggestion(suggestion)}
//                   type="button"
//                   key={i}
//                   tabIndex={0}
//                 >
//                   {suggestionGlyph && <Glyph name={suggestionGlyph} />}
//                   <Typography>{suggestion.text}</Typography>
//                 </S.StyledSuggestion>
//               ))}
//             </S.StyledSuggestionList>
//           )}
//         </S.StyledAutocompleteWrapper>
//       );
//     }
//   );
